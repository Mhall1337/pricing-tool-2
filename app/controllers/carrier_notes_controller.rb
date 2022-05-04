class CarrierNotesController < ApplicationController
  def index
    notes = CarrierNote.all
    render json: notes, include: [:carrier]
  end

  def create
    new_note = @current_user.carrier_note.create(params)
    binding.break
    render json: new_note, status: :created
  end

  private

  def notes_params
    params.permit(:note, :selectCarrier)
  end
end
