import { RecoilRoot } from 'recoil';
import HabitContainer from './components/trackers/habitContainer';

function App() {
    return (
        <div className="App-habit-tracker">
            <RecoilRoot>
                <HabitContainer />
            </RecoilRoot>
        </div>
    );
}

export default App;
