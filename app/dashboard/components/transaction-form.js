'use client';
import Select from "@/components/select";
import Label from "@/components/label";
import { categories, types } from "@/lib/consts";
import Input from "@/components/input";
import Button from "@/components/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "@/lib/validation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTransaction, updateTransaction } from "@/lib/actions";
import FormError from "./form-error";

export default function TransactionForm({initialData}) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema),
    defaultValues: initialData ?? {
      created_at: new Date().toISOString().split('T')[0]
    }
  });

  const router = useRouter()

  // CREATE - CRUD
  const [isSaving, setSaving] = useState(false);
  const [lastError, setLastError] = useState()
  const type = watch('type')
  const editing = Boolean(initialData)

  const onSubmit = async (data) => {
    setSaving(true);
    setLastError();

    try {
      if(editing) {
        await updateTransaction(
          initialData.id,
          data
        )
      } else {
        await createTransaction(data); // Update list so user can see it updated straight away
      }
      router.push('/dashboard');  // redirect
    }
    catch (error) {
      setLastError(error)
    }
    finally {
      setSaving(false);
    }
  };

  const onError = (errors) => {
    console.log("Form errors:", errors);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select {...register("type", {
            onChange: (e) => {
              if (e.target.value != 'Expense') {
                setValue('category', undefined)
              }
            }
          })}>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
          <FormError error={errors.type?.message} />
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")} disabled={type != 'Expense'}>
            <option value=''>Select a category</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
          <FormError error={errors.category?.message} />
        </div>

        <div>
          <Label className='mb-1'>Amount</Label>
          <Input {...register('created_at')} disabled={editing} />
          <FormError error={errors.created_at?.message} />

        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" {...register("amount")} />
          <FormError error={errors.amount?.message} />
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input {...register("description")} autoComplete="off" />
          <FormError error={errors.description?.message} />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          {lastError && <FormError error={lastError} />}
        </div>
        <Button type="submit" disabled={isSaving}>Save</Button>
      </div>
    </form>
  );
}
