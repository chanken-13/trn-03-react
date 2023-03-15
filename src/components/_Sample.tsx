import React from 'react'

// Hello
// Helloはクリックするとアラートを出すテキストを返します
const Hello = () => {
  // クリック時に呼ばれる関数
  const onClick = () => {
    // アラートを出す
    alert('hello')
  }
  const text = 'Hello, React'

  // テキストを子に持つdiv要素を返す
  return (
    // divのonClickにクリック時のコールバック関数を渡す
    <div onClick={onClick}>
      {text}
    </div>
  )
}


// Name
// 名前を入力するためのテキストボックスを返す
const Name = () => {
  // input要素のonchangeイベントに対するコールバック関数を定義します
  // React.ChangeEventはフォームonchangeイベントに対応する型です
  // 詳しくは https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events もご参照ください
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 入力されたテキストをコンソールに表示します
    console.log(e.target.value)
  }

  return (
    // styleオブジェクトのキーはキャメルケースになります
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
      {/* forの代わりにhtmlForを使います */}
    　<label htmlFor="name">名前</label>
      {/* classやonchangeの代わりに、classNameやonChangeを使います */}
    　<input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  )
}


// Message
// 無名関数でコンポーネントを定義し、Textという変数に代入する
// Textコンポーネントは親から`content`というデータを受け取る
const Text = (props: {content: string}) => {
  // propsからcontentという値を取り出す
  const { content } = props
  // propsで渡されたデータを表示する
  return <p className="text">{content}</p>
}
// 同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
  const content1 = 'This is parent component'
  const content2 = 'Message uses Text component'

  return (
    <div>
      {/* contentというキーでコンポーネントにデータを渡す */}
      <Text content={content1} />
      {/* 違うデータを渡すと、違う内容が表示される */}
      <Text content={content2} />
    </div>
  )
}


// ContainerSample
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


// ContextSample
// Titleを渡すためのContextを作成します
const TitleContext = React.createContext('')

// Titleコンポーネントの中でContextの値を参照します
const Title = () => {
  // Consumerを使って、Contextの値を参照します
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数を置いて、Contextの値を参照します */}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}
const Header = () => {
  return (
    <div>
      {/* HeaderからTitleへは何もデータを渡しません */}
      <Title />
    </div>
  )
}
// Pageコンポーネントの中でContextに値を渡します
const Page = () => {
  const title = 'React Book'

  // Providerを使いContextに値をセットします。
  // Provider以下のコンポーネントから値を参照できます
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}
















// export
const _Sample = () => {
  // テキストを子に持つdiv要素を返す
  return (
    // divのonClickにクリック時のコールバック関数を渡す
    <div>
      <Hello/>
      <Name/>
      <Message/>
      <Parent/>
      <Page/>
    </div>
  )
}
export default _Sample
