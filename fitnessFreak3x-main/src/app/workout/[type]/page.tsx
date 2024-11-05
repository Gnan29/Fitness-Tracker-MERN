"use client";
import React from 'react';
import './workoutPage.css';

const Page = () => {
    const [workout, setWorkout] = React.useState<any>(null);
    const [selectedType, setSelectedType] = React.useState<string>('Abs'); // Default to 'Abs'

    const getWorkout = async (type: string) => {
        let data: any;

        // Define the workout data based on the type using if-else ladder
        if (type === 'Chest') {
            data = {
                type: 'Chest',
                imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 30,
                exercises: [
                    { exercise: 'Flat Bench Press', videoUrl: 'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif', sets: 3, reps: 10, rest: 60 },
                    { exercise: 'Incline Bench Press', videoUrl: 'https://gymvisual.com/img/p/1/0/3/9/8/10398.gif', sets: 3, reps: 10, rest: 60 },
                    { exercise: 'Decline Bench Press', videoUrl: 'https://gymvisual.com/img/p/6/5/2/3/6523.gif', sets: 3, reps: 10, rest: 60 }
                ]
            };
        } else if (type === 'Abs') {
            data = {
                type: 'Abs',
                imageUrl: 'https://images.unsplash.com/photo-1583770540550-970f5fcc4d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 20,
                exercises: [
                    { exercise: 'Crunches', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/2/15662.gif', sets: 3, reps: 15, rest: 30 },
                    { exercise: 'Leg Raises', videoUrl: 'https://gymvisual.com/img/p/1/3/9/6/2/13962.gif', sets: 3, reps: 15, rest: 30 },
                    { exercise: 'Plank', videoUrl: 'https://gymvisual.com/img/p/1/4/5/0/6/14506.gif', sets: 3, duration: '1 min', rest: 30 }
                ]
            };
        } else if (type === 'Shoulders') {
            data = {
                type: 'Shoulders',
                imageUrl: 'https://images.unsplash.com/photo-1554823052-4e3f652a5b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 25,
                exercises: [
                    { exercise: 'Shoulder Press', videoUrl: 'https://gymvisual.com/img/p/1/0/1/4/5/10145.gif', sets: 3, reps: 12, rest: 60 },
                    { exercise: 'Lateral Raise', videoUrl: 'https://gymvisual.com/img/p/1/5/2/4/7/15247.gif', sets: 3, reps: 15, rest: 30 },
                    { exercise: 'Front Raise', videoUrl: 'https://gymvisual.com/img/p/1/5/2/4/8/15248.gif', sets: 3, reps: 12, rest: 30 }
                ]
            };
        } else if (type === 'Back') {
            data = {
                type: 'Back',
                imageUrl: 'https://images.unsplash.com/photo-1524036437850-d892f8f8e7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 30,
                exercises: [
                    { exercise: 'Pull-Ups', videoUrl: 'https://gymvisual.com/img/p/1/5/2/4/4/15244.gif', sets: 3, reps: 8, rest: 60 },
                    { exercise: 'Bent Over Row', videoUrl: 'https://gymvisual.com/img/p/1/5/2/4/5/15245.gif', sets: 3, reps: 10, rest: 60 },
                    { exercise: 'Deadlift', videoUrl: 'https://gymvisual.com/img/p/1/5/2/4/6/15246.gif', sets: 3, reps: 8, rest: 60 }
                ]
            };
        } else if (type === 'Biceps') {
            data = {
                type: 'Biceps',
                imageUrl: 'https://images.unsplash.com/photo-1517245397300-1c5f771e08a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 20,
                exercises: [
                    { exercise: 'Bicep Curls', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/3/15663.gif', sets: 3, reps: 12, rest: 30 },
                    { exercise: 'Hammer Curls', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/4/15664.gif', sets: 3, reps: 10, rest: 30 },
                    { exercise: 'Concentration Curls', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/5/15665.gif', sets: 3, reps: 12, rest: 30 }
                ]
            };
        } else if (type === 'Triceps') {
            data = {
                type: 'Triceps',
                imageUrl: 'https://images.unsplash.com/photo-1504371731972-8e68edb9f1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 20,
                exercises: [
                    { exercise: 'Tricep Dips', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/6/15666.gif', sets: 3, reps: 12, rest: 30 },
                    { exercise: 'Skull Crushers', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/7/15667.gif', sets: 3, reps: 10, rest: 30 },
                    { exercise: 'Overhead Tricep Extension', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/8/15668.gif', sets: 3, reps: 12, rest: 30 }
                ]
            };
        } else if (type === 'Legs') {
            data = {
                type: 'Legs',
                imageUrl: 'https://images.unsplash.com/photo-1504110785798-1b16b98b25e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 35,
                exercises: [
                    { exercise: 'Squats', videoUrl: 'https://gymvisual.com/img/p/1/5/6/6/9/15669.gif', sets: 3, reps: 12, rest: 60 },
                    { exercise: 'Lunges', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/0/15670.gif', sets: 3, reps: 10, rest: 60 },
                    { exercise: 'Leg Press', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/1/15671.gif', sets: 3, reps: 10, rest: 60 }
                ]
            };
        } else if (type === 'Cardio') {
            data = {
                type: 'Cardio',
                imageUrl: 'https://images.unsplash.com/photo-1511311765801-d89a2f89e00e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 30,
                exercises: [
                    { exercise: 'Running', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/2/15672.gif', sets: 1, duration: '30 min', rest: 0 },
                    { exercise: 'Jump Rope', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/3/15673.gif', sets: 3, duration: '1 min', rest: 30 },
                    { exercise: 'Burpees', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/4/15674.gif', sets: 3, reps: 15, rest: 30 }
                ]
            };
        } else if (type === 'Forearms') {
            data = {
                type: 'Forearms',
                imageUrl: 'https://images.unsplash.com/photo-1517404200565-d22b3fbb6f85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
                durationInMin: 15,
                exercises: [
                    { exercise: 'Wrist Curls', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/5/15675.gif', sets: 3, reps: 15, rest: 30 },
                    { exercise: 'Reverse Wrist Curls', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/6/15676.gif', sets: 3, reps: 15, rest: 30 },
                    { exercise: 'Farmers Walk', videoUrl: 'https://gymvisual.com/img/p/1/5/6/7/7/15677.gif', sets: 3, duration: '1 min', rest: 30 }
                ]
            };
        }

        // Set the workout data
        setWorkout(data);
    };

    // Fetch workout data whenever the selectedType changes
    React.useEffect(() => {
        getWorkout(selectedType);
    }, [selectedType]);

    return (
        <div className="workout">
            <h1 className="mainhead1">{workout?.type} Day</h1>

            {/* Buttons to select different workout types */}
            <div className="workout__types">
                {['Chest','Abs',  'Shoulders', 'Back', 'Biceps', 'Triceps', 'Legs', 'Cardio', 'Forearms'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={type === selectedType ? 'active' : ''}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="workout__exercises">
                {workout?.exercises.map((item: any, index: number) => (
                    <div
                        className={index % 2 === 0 ? 'workout__exercise' : 'workout__exercise workout__exercise--reverse'}
                        key={index}
                    >
                        <h3>{index + 1}</h3>
                        <div className="workout__exercise__image">
                            <img src={item.videoUrl} alt={item.exercise} />
                        </div>
                        <div className="workout__exercise__content">
                            <h2>{item.exercise}</h2>
                            <span>{item.sets} sets X {item.reps ? item.reps : item.duration}</span>
                            <p>{item.rest ? `Rest: ${item.rest} seconds` : ''}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
