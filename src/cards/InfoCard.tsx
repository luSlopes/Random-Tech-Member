import { type TechMember } from "@/api/database";

export function InfoCard(props: Omit<TechMember, "imgUrl">) {
  return (
    <div className="bg-gray-300 rounded-3xl flex flex-col gap-2 text-gray-900 w-[300px] h-[250px] shadow-2xl hover:mb-[20px] ">
      <h3 className="text-inherit text-3xl self-center-safe py-4">
        {props.name}
      </h3>

      <h3 className=" px-4 text-inherit text-lg">
        <strong>Cargo </strong>
        <br />
        {props.role}
      </h3>
      <h3 className="px-4 text-inherit">
        <strong>Semestre de ingresso</strong>
      </h3>
      <p className="px-4 text-inherit">{props.onCompanySince}</p>
    </div>
  );
}
