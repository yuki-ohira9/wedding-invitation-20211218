<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvitationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unique();
            $table->boolean('is_attend');
            $table->string('desired')->nullable(true);
            $table->boolean('has_allergy');
            $table->string('allergy_detail')->nullable(true);
            $table->string('message')->nullable(true);
            $table->string('address');
            $table->string('tel', 20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invitations');
    }
}
