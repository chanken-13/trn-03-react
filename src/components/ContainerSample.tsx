// Containerのpropsの型を定義します
type ContainerProps = {
  title: string
  children: React.ReactNode
}

// Reactコンポーネントの型付けに関しては、以下もご参照ください
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    // Containerを使用する際に、他の要素を囲って使用する
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  )
}

export default Parent