class CarrierNotesController < ApplicationController
  def index
    notes = CarrierNote.all
    render json: notes, include: [:carrier]
  end

  def create
    carrier = Carrier.find_by(carrier_name: params[:selectCarrier])
    new_note = @current_user.carrier_notes.create(carrier_id: carrier.id, note: params[:note])
    render json: new_note, status: :created
  end

  private

  def notes_params
    params.permit(:note, :selectCarrier)
  end
end
