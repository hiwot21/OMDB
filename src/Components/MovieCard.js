import styled from "styled-components";
const Paragragh = styled.p`
  display: inline-block;
  font-size: medium;
`;
const Div = styled.div`
  width: 100px;
  margin: 30px;
  border: 1px solid black;
  display: ${(props) => props.display};
`;
const Button = styled.button`
  color: ${(props) => props.color};
  display: inline-block;
  border-radius: 5px;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  padding: 8px;
  font-size: medium;
`;
const Moviecard = (props) => {
  return (
    <Div
      onClick={() => {
        props.buttononclick(props.movieId);
      }}
    >
      <img src={props.posterUrl} alt="movie poster"></img>
      <Paragragh>{props.title}</Paragragh>
      <Button border="1px solid red" bgcolor="rgb(247, 166, 166)">
        {props.type}
      </Button>
      {/* <p className="title">{props.title}</p> */}
      {/* <p className="type">{props.type}</p> */}
    </Div>
  );
};
export default Moviecard;
