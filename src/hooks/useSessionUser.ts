import type { Session } from "next-auth"
import { useSession } from "next-auth/react"

interface HooksType {
  session: Session | null
  userName: string | null
  userEmail: string | null
  userImage: string | null
}

const useSessionUser = (): HooksType => {
  const { data: session } = useSession();

  return {
    session,
    userName: session?.user?.name || null,
    userEmail: session?.user?.email || null,
    userImage: session?.user?.image || null,
  };
};

export default useSessionUser
