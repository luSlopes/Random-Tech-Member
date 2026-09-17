type PictureCardProps = {
  pictureUrl: string;
  name: string;
};

export function PictureCard({ pictureUrl, name }: PictureCardProps) {
  return (
    <div>
      <img
        src={pictureUrl}
        alt={`Foto de ${name}`}
        className="w-[300px] h-[280px] rounded-full object-cover picture hover:shadow-2xl hover:mb-[20px]"
      />
    </div>
  );
}
