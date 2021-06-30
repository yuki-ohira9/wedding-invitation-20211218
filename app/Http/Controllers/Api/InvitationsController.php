<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\InvitationsRequest;
use App\Models\User;
use App\Models\Invitation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class InvitationsController extends Controller
{
    /**
     * @param InvitationsRequest $request
     * @param int $userId
     */
    public function update(InvitationsRequest $request, int $userId)
    {
        DB::beginTransaction();
        try {
            $params = $request->validated();
            User::where('id', $userId)->update([
                'email' => $params['email']
            ]);
    
            Invitation::updateOrCreate(
                ['user_id' => $userId],
                [
                    'is_attend' => $params['is_attend'],
                    'has_allergy' => $params['has_allergy'],
                    'message' => $params['message'],
                    'address' => $params['address'],
                    'tel' => $params['tel'],
                    'allergy_detail' => $params['allergy_detail'],
                ]
            );
            DB::commit();
            return response()->json(['result' => true]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            DB::rollback();
            return response()->json(['result' => false]);
        }
    }
}
