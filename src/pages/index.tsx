import useAuth from "~/hooks/useAuth"
import useSessionUser from "~/hooks/useSessionUser"

export default function Home() {
  const { session, userName } = useSessionUser();
  const { signIn, signOut } = useAuth();

  if(session) {
    return <>
      Signed in as {userName} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}