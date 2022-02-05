import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

function Chat() {
    return (
        <div>

            <Bar

                data={{
                    labels: ['Java', 'React','SQL'],
                    datasets: [{
                        label: 'COURSE WATCHTIME COMPARISM',
                        data: [15,13,20],
                        backgroundColor:[
                            '#06102C',
                            '#7785AC',
                            '#9AC6C5'
                        ]
                        
                    }]
                }}
                width= '400px'
                height='300px'
                // options={{
                //     // aspectRatio: 1,
                // }}


            >


            </Bar>
        </div>
    )
}

export default Chat
