'use client';
import Select from "@/components/select";
import Label from "@/components/label";
import { categories, types } from "@/lib/consts";
import Input from "@/components/input";
import Button from "@/components/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "@/lib/validation";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTransaction } from "@/lib/actions";
import FormError from "./form-error";

export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema)
  });

  const router = useRouter()

  // CREATE - CRUD
  const [isSaving, setSaving] = useState(false);
  const [lastError, setLastError] = useState()
  const type = watch('type')

  const onSubmit = async (data) => {
    setSaving(true);
    setLastError();

    try {
      await createTransaction(data); // Update list so user can see it updated straight away
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
          <FormError error={errors.type} />
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")} disabled={type != 'Expense'}>
            <option value=''>Select a category</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
          <FormError error={errors.category} />
        </div>

        <div>
          <Label className="mb-1">Date</Label>
          <Controller
            name="created_at"
            control={control}
            defaultValue="" // Ensure the value is never undefined
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <Flatpickr
                {...field}
                options={{
                  dateFormat: "d/m/Y",
                  allowInput: true,
                  defaultDate: new Date(),
                }}
                onChange={(dates) => {
                  // Update field value properly
                  field.onChange(dates[0] ? dates[0].toLocaleDateString("en-GB") : "");
                }}
                render={(props, ref) => (
                  <Input
                    {...props}
                    ref={ref}
                    autoComplete="off"
                    value={field.value || ''} // Ensure the value is controlled
                    onChange={field.onChange} // Ensure the onChange handler is passed down
                  />
                )}
              />
            )}
          />
          <FormError error={errors.created_at} />
        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" {...register("amount")} />
          <FormError error={errors.amount} />
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input {...register("description")} autoComplete="off" />
          <FormError error={errors.description} />
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
