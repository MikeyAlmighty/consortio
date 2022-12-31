import { ThreeCircles } from 'react-loader-spinner'

type LoaderProps = {
    isLoading: boolean
}

const Loader = ({ isLoading }: LoaderProps) => (
  <ThreeCircles
    height="50"
    width="50"
    color="#84CC16"
    visible={isLoading}
    ariaLabel="three-circles-rotating"
  />
)

export default Loader
