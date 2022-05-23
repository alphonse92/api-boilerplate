export function login({email, password}) {
  const {email, password} = req.body;
  if (!email || !password) {
    throw new Forbidden();
  }
}
