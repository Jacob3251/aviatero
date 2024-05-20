import { Link, useNavigate } from "react-router-dom";

function IndividualEmail() {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-full">
      <div className="p-10 text-left font-monrope text-[20px] text-secondary space-y-5">
        <div className="uppercase text-[20px] font-monrope font-semibold flex space-x-2 items-center text-primary">
          <Link
            to="/dashboard"
            className="no-underline text-primary tracking-wider"
          >
            Dashboard
          </Link>
          {"  "}
          <span className="text-[24px]">/</span>
          {"  "}
          <span onClick={() => navigate("/dashboard/email")}>Email</span>
        </div>
        <div className="">
          <span className="text-primary font-bold">Subject:</span> Lorem ipsum
          dolor sit amet.
        </div>
        <div>
          <span className="text-primary font-bold">From:</span>{" "}
          "example@gmail.com"
        </div>
        <div>
          <span className="text-primary font-bold">To:</span>{" "}
          "example@gmail.com"
        </div>
        <div>
          <span className="text-primary font-bold">Date:</span> 25th June, 2024
        </div>
        <div className="text-primary font-bold">Email Content:</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio facilis
          atque deserunt error amet modi, tenetur at commodi velit, iure
          quisquam autem explicabo adipisci maiores, ipsa itaque nostrum? Est
          optio quas cupiditate maiores, quis quos culpa enim, amet deserunt
          laborum voluptatem architecto incidunt. Quod consequuntur facilis
          voluptatem laudantium assumenda quia aliquam sequi. Eligendi qui
          pariatur expedita modi maiores suscipit architecto mollitia aperiam
          ipsa. Officiis officia quidem ea culpa rerum, numquam sit reiciendis
          ut adipisci doloribus modi repudiandae? Magnam ut voluptate fuga earum
          possimus ratione eligendi eius incidunt ipsam nobis natus porro
          exercitationem similique consequatur in ipsum fugit assumenda harum
          sint, facere quis et nemo? Accusamus vel cum cupiditate. Praesentium
          molestiae ipsum quisquam quaerat repellat corrupti sint fuga mollitia
          qui unde officiis minus voluptatum necessitatibus nihil, veritatis
          optio nisi pariatur quibusdam libero! Nulla nisi alias quidem, commodi
          sit, incidunt earum autem facere magni quia aliquid! Quo cupiditate
          quae dolore voluptas laboriosam odio, dignissimos expedita! Eos
          laudantium, voluptatibus voluptates corporis temporibus officiis ipsam
          obcaecati doloribus cupiditate eum! Praesentium distinctio recusandae
          voluptate amet neque alias facere dolorem deleniti consequatur, quis
          sequi sunt dicta autem saepe pariatur est quaerat perferendis. Natus
          vitae ea laborum numquam similique maxime quos, fuga magni eius
          exercitationem consectetur! Officia.
        </div>
      </div>
    </div>
  );
}

export default IndividualEmail;
