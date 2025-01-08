import { Alert } from "react-bootstrap"

const Welcome = function() {
    return(
        <>
      <Alert variant="light">
      <Alert.Heading>Welcome!</Alert.Heading>
      <p>
        Benvenuto nel nostro Shop online! Scopri la nostra selezione di libri.
      </p>
    </Alert>
    </>
     )
}

export default Welcome