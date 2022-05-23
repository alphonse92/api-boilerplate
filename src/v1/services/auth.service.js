import Forbidden from './../errors/Forbidden';

export async function login({email, password}) {
  if (!email || !password) {
    throw new Forbidden();
  }
  return {email, password};
}
