import { Alert } from "react-bootstrap"

const Welcome = function() {
    return(
        <>
      <Alert variant="secondary">
      <Alert.Heading className="ms-3 fw-bold fs-4">Welcome!</Alert.Heading>
      <p className="ms-3">
        Benvenuto nel nostro Shop online! Scopri la nostra selezione di libri.
      </p>
    </Alert>
    </>
     )
}

export default Welcome