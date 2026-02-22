import { RegisterForm } from "@/components/forms/RegisterForm";
import { Card } from "@/components/ui/Card";

export default function RegisterPage() {
  return (
    <Card>
      <h1 className="mb-4 text-2xl font-semibold">Register</h1>
      <RegisterForm />
    </Card>
  );
}
