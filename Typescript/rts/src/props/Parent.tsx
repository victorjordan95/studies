import Child from "./Child";

const Parent = (props: any) => {
  return (
    <Child 
      color="#fff"
      onClick={() => console.log("clicked")}  
    />
  );
}

export default Parent;