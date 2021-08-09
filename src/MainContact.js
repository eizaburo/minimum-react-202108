import React from 'react';
import { useForm } from 'react-hook-form';

const MainContact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // alert(`email=${data.email},body=${data.body}`);

        //API連携
        const base_url = "http://localhost:3001/inquiry";
        fetch(base_url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encodeURI(`email=${data.email}&body=${data.body}`)
        })
            .then((response) => {
                response.text()
                    .then((text) => {
                        alert(text);
                    })
                    .catch((error) => {
                        alert(error.message);
                    })
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <main>
            <section>
                <h2>お問合せフォーム</h2>
                <p>フォームに入力してください。</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Email</label>
                        <input type="text" id="email" {...register("email", {
                            required: true,
                            pattern: /^[a-z]+@[a-z]+\.[a-z]+$/
                        })} />
                        {errors.email?.type === "required" && <span className="form-error">Emailは必須です。</span>}
                        {errors.email?.type === "pattern" && <span className="form-error">EmailはEmailの形式で入力してください。</span>}
                    </div>
                    <div>
                        <label>お問合せ内容</label>
                        <textarea rows="5" id="body" {...register("body", {
                            required: true,
                            maxLength: 10
                        })}></textarea>
                        {errors.body?.type === "required" && <span className="form-error">お問合せ内容は必須です。</span>}
                        {errors.body?.type === "maxLength" && <span className="form-error">10文字以内で入力してください。</span>}
                    </div>
                    <div>
                        <button id="btn" type="submit">送信</button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default MainContact;