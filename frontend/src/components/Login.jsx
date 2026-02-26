import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Iniciar Sesión</h1>
      <p>Aquí irá el formulario para ingresar con Nombre y Cédula.</p>
      {/* Un botón temporal para ir a la prueba rápidamente y probar */}
      <button onClick={() => navigate('/test')}>
        Ir a la Prueba (Temporal)
      </button>
    </div>
  );
}