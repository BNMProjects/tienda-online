import { supabase } from "../supabaseClient";

const auth = async (method, data) => {
  if (method === "SignUp") {
    return await supabase.auth.signUp(data);
  }

  if (method === "SignIn") {
    return await supabase.auth.signIn(data);
  }

  if (method === "Update") {
    return await supabase.auth.update(data);
  }

  if (method === "Session") {
    return supabase.auth.session();
  }

  if (method === "UserData") {
    return supabase.auth.user();
  }

  if (method === "SignOut") {
    return await supabase.auth.signOut();
  }

  if (method === "ResetPass") {
    return supabase.auth.api.resetPasswordForEmail(data);
  }

  if (method === "AuthStateChange") {
    const listener = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
    });

    return listener;
  }
};

export default auth;
