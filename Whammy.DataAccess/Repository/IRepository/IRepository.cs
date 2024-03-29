﻿using System;
using System.Linq.Expressions;

namespace Whammy.DataAccess.Repository.IRepository
{
    public interface IRepository<T> where T : class
    {
        //Get all
        IEnumerable<T> GetAll(string? includeProps = null, Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null, Expression<Func<T, bool>>? filter = null);

        //Get single
        T GetFirstOrDefault(Expression<Func<T, bool>>? filter = null, string? includeProps = null);

        //Add
        void Add(T entity);

        //Remove
        void Remove(T entity);

        //Remove range
        void RemoveRange(IEnumerable<T> entities);
    }
}

