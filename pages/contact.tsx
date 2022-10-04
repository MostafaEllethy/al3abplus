/* eslint-disable @next/next/no-img-element */
import { Category } from "@prisma/client";
import { FC, useRef, useState } from "react";
import { fetchCategories } from "../lib/fetch-categories";
import { IoChatboxSharp } from "react-icons/io5";
import Spinner from "../components/Spinner";
import Head from "next/head";
import SideCategoriesLayout from "../layouts/SideCategoriesLayout";
import { BRAND_NAME } from "../constants";

const Contact: FC<{ categories: Category[] }> = ({ categories }) => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <SideCategoriesLayout categories={categories}>
      <Head>
        <title>{`اتصل بنا - ${BRAND_NAME} ألعاب مجانية عبر الانترنت`}</title>
        <meta
          name="description"
          content="اتصل بنا - شكراً لكم على زيارة موقعنا العاب+ في حال وجود أي استفسار أو اقتراحات خاصة ترغب في توجيهها لادارة الموقع يمكنك التواصل من خلال النموذج المرفق."
        />
      </Head>

      <form
        className="max-w-md mx-auto mb-10 flex flex-col gap-5 items-center md:mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(false);
          setSending(true);
          fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
              name: name.current?.value,
              email: email.current?.value,
              message: message.current?.value,
            }),
          }).then(() => {
            setSending(false);
            setSent(true);
          });
        }}
      >
        <section className="h-20 flex justify-center items-center mb-3 w-full">
          <h1 className="text-3xl font-bold text-purple-500 z-10">
            <IoChatboxSharp className="inline-block" size={36} /> اتصل بنا
          </h1>
        </section>

        {sent && <p className="text-success">تم الارسال بنجاح</p>}
        <input
          disabled={sending}
          ref={name}
          name="name"
          type="text"
          placeholder="الاسم"
          className="input input-bordered w-full"
          required
        />
        <input
          disabled={sending}
          ref={email}
          name="email"
          type="email"
          placeholder="البريد الالكتروني"
          className="input input-bordered w-full"
          required
        />
        <textarea
          disabled={sending}
          ref={message}
          rows={4}
          name="message"
          className="textarea textarea-bordered w-full"
          placeholder="الرسالة"
          required
        ></textarea>
        {sending ? (
          <Spinner />
        ) : (
          <button className="btn" type="submit">
            ارسال
          </button>
        )}
      </form>
    </SideCategoriesLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      categories: await fetchCategories(),
    },
    revalidate: 900,
  };
}

export default Contact;
