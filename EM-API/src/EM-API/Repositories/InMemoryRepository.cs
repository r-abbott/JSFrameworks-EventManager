using EM_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EM_API.Repositories
{
    public abstract class InMemoryRepository<T>
        where T : Entity
    {
        public T Get(int id)
        {
            return Data.FirstOrDefault(d => d.Id == id);
        }

        public IEnumerable<T> Find(Func<T,bool> query)
        {
            return Data.Where(query).ToList();
        }

        public void Add(T entity)
        {
            Data.Add(entity);
        }

        public void Update(T entity)
        {
            var existing = Get(entity.Id);
            if (existing != null)
            {
                Delete(existing);
            }
            Add(entity);
        }

        public void Delete(int id)
        {
            var existing = Get(id);
            if (existing != null)
            {
                Delete(existing);
            }
        }

        public void Delete(T entity)
        {
            Data.Remove(entity);
        }

        protected abstract List<T> Data { get; }
    }
}
