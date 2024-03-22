import { useReducer } from 'react';

const reducer = (state: any, action: any) => {
    if (action.type === 'hi') {
        return {
            ...state,
            a: action.payload
        };
    } else if (action.type === 'ha') {
        return {
            ...state,
            b: action.payload
        };
    }
    throw Error('Unknow action');
};

const Blog = () => {
    const [state, dispacth] = useReducer(reducer, { a: 1, b: 'mot' });

    return (
        <>
            <p> Blog + {state.a}</p>
            <p> Blog + {state.b}</p>
            <div className="">
                <button
                    onClick={() => {
                        dispacth({
                            type: 'hi',
                            payload: state.a + 1
                        });
                    }}
                >
                    hihi
                </button>
            </div>
        </>
    );
};

export default Blog;
