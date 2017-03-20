namespace EM_API.Models
{
    public abstract class Entity
    {
        public int Id { get; }

        public Entity(int id)
        {
            Id = id;
        }
    }
}
