export default function InputNotifier(props) {
  return <input type="text" onChange={e => props.onChangeText(e.target.value)} />;
}