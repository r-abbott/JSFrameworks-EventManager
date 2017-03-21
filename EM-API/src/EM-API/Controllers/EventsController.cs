using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using EM_API.ViewModels;
using EM_API.Repositories;
using EM_API.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace EM_API.Controllers
{
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        private readonly EventsRepository _eventRepo;

        public EventsController(EventsRepository eventRepo)
        {
            _eventRepo = eventRepo;
        }

        // GET: api/values
        [HttpGet]
        public ActionResult Get()
        {
            var events = _eventRepo.Find(a => true);
            var viewModel = events.Select(e => new EventListingViewModel(e.Id, e.Name, e.Date, e.Price));
            return Ok(viewModel);
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetById")]
        public ActionResult Get(int id)
        {
            var e = _eventRepo.Get(id);
            if (e == null)
            {
                return NotFound();
            }
            var viewModel = new EventDetailsViewModel(e.Id, e.Name, e.Description, e.Date, e.Price, e.AdditionalInformation);
            return Ok(viewModel);
        }

        // POST api/values
        [HttpPost]
        public ActionResult Post([FromBody]NewEventViewModel newEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var id = _eventRepo.GetNextId();
            var eve = new Event(id, newEvent.Name, newEvent.Description, newEvent.Price, newEvent.DateTime, newEvent.AdditionalInformation);
            try
            {
                _eventRepo.Add(eve);
                var viewModel = new EventDetailsViewModel(eve.Id, eve.Name, eve.Description, eve.Date, eve.Price, eve.AdditionalInformation);
                return CreatedAtRoute("GetById", new { id = eve.Id }, viewModel);
            }
            catch(Exception)
            {
                return StatusCode(500, "There was an error handling your request.");
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]NewEventViewModel updatedEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var existing = _eventRepo.Get(id);
                if(existing == null)
                {
                    return NotFound();
                }
                var eve = new Event(id, updatedEvent.Name, updatedEvent.Description, updatedEvent.Price, updatedEvent.DateTime, updatedEvent.AdditionalInformation);
                _eventRepo.Update(eve);
                return Ok(eve);
            }
            catch (Exception)
            {
                return StatusCode(500, "There was an error handling your request.");
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                _eventRepo.Delete(id);
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "There was an error handling your request.");
            }
        }
    }
}
