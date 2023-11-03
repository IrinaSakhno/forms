import "../../App.css";

interface Props {
  color: string;
}

const Background = ({ color }: Props) => {
    return (
        <div className="background" style={{backgroundColor: color}} >
            
        </div>
        // <div className="background" style=`background-color:${color}`></div>

    )
};

export default Background;