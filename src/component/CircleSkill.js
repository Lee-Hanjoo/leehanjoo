export default function CircleSkill(props) {
    const { skill } = props
      return (
        <li><img src={`/assets/icon/${skill}.svg`} alt={skill} /></li>
      );
    }