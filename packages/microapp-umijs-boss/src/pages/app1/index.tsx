import { MicroApp } from 'umi';

function App1() {
  return (
    <div>
      <MicroApp
        name="app1"
        autoSetLoading={true}  
      />
    </div>
  )
}

export default App1;