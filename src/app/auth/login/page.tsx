import { LoginForm } from "@/components/forms/LoginForm";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <Card>
      <h1 className="mb-4 text-2xl font-semibold">Login</h1>
      <LoginForm />
    </Card>
  );
}
