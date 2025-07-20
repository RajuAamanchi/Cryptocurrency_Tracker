import { TailSpin } from 'react-loader-spinner'
import './index.css'

const Loader = () => (
  <div className="loader-container" data-testid="loader">
    <TailSpin height="50" width="50" color="#00BFFF" />
  </div>
)

export default Loader
