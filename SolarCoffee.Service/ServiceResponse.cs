using System;

namespace SolarCoffee.Service
{
    public class ServiceResponse<T>
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public DateTime Time { get; set; }

        public T Data { get; set; }
    }
}