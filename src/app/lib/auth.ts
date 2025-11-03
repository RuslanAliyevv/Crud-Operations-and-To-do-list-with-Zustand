export async function login(email: string, password: string) {
  if (email === "admin@portal.com" && password === "12345") {
    return { name: "Admin", role: "admin" };
  }
  return null;
}