function ChildComponent(props){
    const {name,age} = props;
    return (
        <div>
                <p>나는 자식 태그입니다</p>
                <p>이름은 {name}이며 나이는{age}</p>
            </div>
    )
}
export default ChildComponent;