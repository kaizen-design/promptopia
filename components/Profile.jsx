import PromptCard from "./PromptCard";
import Link from "next/link";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      {data.length ? (
        <PromptCardList 
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="mt-5">You haven't created any prompts yet. Click <Link href="/create-prompt" className="blue_gradient">here</Link> to create one.</p>
      )}
    </section>
  )
};

const PromptCardList = ({ data, handleEdit, handleDelete }) => {
  return (
    <div className="mt-10 prompt_layout">
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleEdit={() => handleEdit && handleEdit(post)}
          handleDelete={() => handleDelete && handleDelete(post)}
        />
      ))}
    </div>
  )
};

export default Profile;