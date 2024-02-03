import './App.css';
import CountApp from './Hooks/CountApp';
// import Counter from './Hooks/Counter';
// import DeleteAxios from './AxiosData/DeleteAxios';
// import PostForm from './AxiosData/PostForm';
// import PostList from './AxiosData/PostList';
// import Form1 from './Forms/Form1';
// import Form1 from './Forms/Form1';
// import Button from './Styles/Button';
// import Inlinecss from './Styles/Inlinecss';
// import Stylesheet from './Styles/Stylesheet';
import './Styles/appStyle.module.css'
import './Styles/appStyles.css'
// import MemoComp from './purecomponent/MemoComp';
// import ParentComp from './purecomponent/ParentComp';
// import Unmounting from './lifeCycles/Unmounting';
// import Lifecycle1 from './lifeCycles/Lifecycle1';
// import Errorhandling from './lifeCycles/Errorhandling';
// import Mycomponent from './lifeCycles/Mycomponent';
// import PureComp from './purecomponent/PureComp';

// import Styles from './Styles/appStyle.module.css'


function App() {
  return (
    <div className="App">
      <h1>This is second react app</h1>
      {/* <Stylesheet primary = {true}/> */}
      {/* <Inlinecss/> */}

      {/* <h1 className= 'error'>This is Error Text</h1> */}
      {/* <h1 className= {Styles.success}>This is Success Text</h1> */}

      {/* <div style={{
        textAlign: "center",
        margin: "auto"
      }}>

        <h1 style={{ color: 'green' }}>Style components</h1>

        <h3> React Styled-component example</h3>
        <Button bg="green">Click</Button>
      </div>
      <Button /> */}

      {/* <Form1 /> */}
{/* 
      <Errorhandling>

        <Mycomponent />
      </Errorhandling> */}

      {/* <Form1 /> */}

      {/* <Lifecycle1 /> */}
      {/* <Unmounting /> */}

      {/* <PureComp/> */}
      {/* <ParentComp/> */}
      {/* <MemoComp/> */}

      {/* <PostList/> */}
      {/* <PostForm/> */}

      {/* <DeleteAxios /> */}

      {/* <Counter/> */}
      <CountApp/>
      
    </div>
  );
}

export default App;
