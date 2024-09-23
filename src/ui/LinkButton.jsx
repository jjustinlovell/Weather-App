import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({children, to}) {

  const navigate = useNavigate()

  return (
    <Link to={to} className="px-4 py-2 text-sm text-white bg-blue-400 rounded-md">
      {children}
    </Link>
  )
}
