import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({children, to}) {

  const navigate = useNavigate()

  return (
    <Link to={to} className="text-sm text-white bg-blue-400">
      {children}
    </Link>
  )
}
