export default function CircleSkill(props) {
    const { skill } = props
      return (
        <li className="circle_skill"><img src={`/assets/icon/${skill}.svg`} alt={skill} /></li>
      );
    }