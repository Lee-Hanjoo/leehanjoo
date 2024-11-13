export default function CircleSkill(props) {
    const { skill, jpg } = props
      return (
        <li className="circle_skill"><img src={`/assets/icon/${skill}`} alt={skill} /></li>
      );
    }