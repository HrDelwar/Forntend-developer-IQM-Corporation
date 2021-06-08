import moment from 'moment';
import React, { useEffect, useState } from 'react';


interface IState {
    owner: {
        reputation: number,
        user_id: number,
        user_type: string,
        profile_image: string,
        display_name: string,
        link: string,
    },
    down_vote_count: number,
    up_vote_count: number,
    creation_date: number,
    question_id: number,
    title: string,
    body: string,
}
interface QuestionResponse {
    items: IState[],
    has_more: boolean,
    quota_max: number,
    quota_remaining: number,
    page: number,
    page_size: number,
    total: number,
    type: string
}

const Questions = () => {
    const [questions, setQuestion] = useState<IState[]>([]);

    useEffect(() => {
        fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=100&order=asc&sort=creation&site=stackoverflow&filter=!*ab6vbrzGXm-CyFpt_l-1A._ul1uiYpvPGdHS8HdZut1hCs*WDLm39IWm_fJrxC6wcHC--yiY375n..aEBX")
            .then((res: Response) => res.json())
            .then((data: QuestionResponse) => {
                setQuestion(data.items)
            })
    }, [])
    return (
        <div className="mt-5 pt-5">
            {
                questions.map((question, index: number) => (
                    <div key={index} className="container ">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={"heading" + index}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                                        {question.title}
                                    </button>
                                    <div className="d-flex justify-content-between mx-5">
                                        <p>Asked <a href={question.owner.link} target="_blank" rel="noreferrer" style={{ color: "goldenrod" }}>{question.owner.display_name}</a></p>
                                        <p>{moment(question.creation_date).format('MMMM Do YYYY, h:mm:ss A')}</p>
                                    </div>
                                </h2>
                                <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
                                    <div className="accordion-body ms-5">
                                        <div dangerouslySetInnerHTML={{ __html: question.body }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Questions;