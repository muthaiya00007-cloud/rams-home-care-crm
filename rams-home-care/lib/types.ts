export interface Customer {
  id?: number;

  customer_name: string;

  phone: string;

  aadhaar: string;

  age: number;

  address: string;

  assigned_staff: string;

  start_date: string;

  renewal_date: string;

  monthly_payment: number;

  notes: string;

  status?: string;

  created_at?: string;
}