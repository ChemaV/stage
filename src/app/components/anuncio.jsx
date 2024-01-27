import Alert from 'react-bootstrap/Alert';

function basicAnnouncement() {
  return (
    <>
      {[
        'primary',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Tonight Diva Pavlalaguna 
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;