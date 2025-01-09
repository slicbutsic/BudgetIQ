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


export default function TransactionForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(transactionSchema)
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const onError = (errors) => {
    console.log("Form errors:", errors);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1">Type</Label>
          <Select {...register("type")}>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        </div>

        <div>
          <Label className="mb-1">Category</Label>
          <Select {...register("category")}>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
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
          {errors.created_at && <p className="text-red-500">{errors.created_at.message}</p>}
        </div>

        <div>
          <Label className="mb-1">Amount</Label>
          <Input type="number" {...register("amount")} />
          {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="mb-1">Description</Label>
          <Input {...register("description")} autoComplete="off" />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
