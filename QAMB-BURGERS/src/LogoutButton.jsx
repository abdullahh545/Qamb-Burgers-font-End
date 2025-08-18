import { useNavigate } from 'react-router'

function LogoutButton({ onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    onLogout()
    navigate('/loginPage')
  }

  return (
    <button 
      onClick={handleLogout} 
    >
      Logout
    </button>
  )
}

export default LogoutButton