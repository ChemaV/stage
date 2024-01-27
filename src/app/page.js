import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'primary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Tonight Diva Plavalaguna
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;