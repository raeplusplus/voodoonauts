const Alumni = () => {
  return (
    <AlumniContainer id="alumni">
      <AlumniH1>Our Alumni</AlumniH1>
      <AlumniWrapper>
        <AlumniCard>
          <AlumniIcon src={Icon1} />
          <AlumniName>{alumniName}</AlumniName>
          <AlumniImg>{alumniImg}</AlumniImg>
          <AlumniP1>{description1}</AlumniP1>
          <AlumniP1>{description2}</AlumniP1>
          <AlumniP1>{description3}</AlumniP1>
          <AlumniP1>{description4}</AlumniP1>
          <Button>{buttonLabel}</Button>
        </AlumniCard>
      </AlumniWrapper>
    </AlumniContainer>
  );
};

export default Alumni;
